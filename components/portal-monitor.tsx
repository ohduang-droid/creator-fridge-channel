"use client";

import { useEffect } from "react";

/**
 * Portal Monitor - Debug component to track nextjs-portal positioning
 * This helps identify why portal elements have incorrect positioning
 * Also fixes inline styles that override CSS
 */
export function PortalMonitor() {
  useEffect(() => {
    // #region agent log
    const fixPortalStyles = (portal: Element) => {
      const htmlPortal = portal as HTMLElement;
      const beforeStyle = htmlPortal.getAttribute('style') || '';
      
      // Remove problematic inline styles and set correct ones
      htmlPortal.style.position = 'fixed';
      htmlPortal.style.top = '0';
      htmlPortal.style.left = '0';
      htmlPortal.style.width = '0';
      htmlPortal.style.height = '0';
      htmlPortal.style.pointerEvents = 'none';
      htmlPortal.style.zIndex = '9999';
      
      const afterStyle = htmlPortal.getAttribute('style') || '';
      
      return { beforeStyle, afterStyle };
    };
    
    const logPortalInfo = () => {
      const portals = document.querySelectorAll('nextjs-portal');
      if (portals.length === 0) {
        console.log('[PortalMonitor] No portals found');
        return;
      }
      
      portals.forEach((portal, index) => {
        const computed = window.getComputedStyle(portal);
        const rect = portal.getBoundingClientRect();
        const inlineStyle = portal.getAttribute('style') || '';
        const hasInlinePosition = inlineStyle.includes('position');
        const hasInlineTop = inlineStyle.includes('top');
        const hasInlineLeft = inlineStyle.includes('left');
        
        // Fix the styles
        const styleFix = fixPortalStyles(portal);
        
        const logData = {
          location: 'portal-monitor.tsx:45',
          message: 'Portal detected and fixed',
          data: {
            index,
            computedPosition: computed.position,
            computedTop: computed.top,
            computedLeft: computed.left,
            rectTop: rect.top,
            rectLeft: rect.left,
            width: rect.width,
            height: rect.height,
            inlineStyleBefore: styleFix.beforeStyle,
            inlineStyleAfter: styleFix.afterStyle,
            hasInlinePosition,
            hasInlineTop,
            hasInlineLeft,
            zIndex: computed.zIndex,
            pointerEvents: computed.pointerEvents
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run1',
          hypothesisId: 'A'
        };
        
        // Console log as fallback
        console.log('[PortalMonitor]', logData);
        
        // HTTP log - fail silently to avoid console errors
        fetch('http://127.0.0.1:7246/ingest/a27393cc-58d1-4541-b8ae-f72a0ef26716',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(logData),
          mode: 'no-cors' // Prevent CORS errors
        }).catch(() => {
          // Silently fail - logging server may not be running
        });
      });
    };
    
    // Log and fix immediately and after delays to catch dynamic changes
    logPortalInfo();
    setTimeout(logPortalInfo, 100);
    setTimeout(logPortalInfo, 500);
    setTimeout(logPortalInfo, 1000);
    
    // Observe for changes and fix any new portals
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'NEXTJS-PORTAL') {
                fixPortalStyles(element);
                logPortalInfo();
              }
              // Also check children
              const portals = element.querySelectorAll?.('nextjs-portal');
              portals?.forEach((portal) => {
                fixPortalStyles(portal);
              });
            }
          });
        } else if (mutation.type === 'attributes' && mutation.target instanceof Element) {
          if (mutation.target.tagName === 'NEXTJS-PORTAL' && mutation.attributeName === 'style') {
            fixPortalStyles(mutation.target);
          }
        }
      });
      logPortalInfo();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true, 
      attributeFilter: ['style', 'class'] 
    });
    
    return () => observer.disconnect();
    // #endregion agent log
  }, []);

  return null;
}

