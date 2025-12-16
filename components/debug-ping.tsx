"use client";

import { useEffect } from "react";

type DebugPingProps = {
  runId: string;
  hasWhatIsSection: boolean;
  note: string;
};

const DEBUG_ENDPOINT = "http://127.0.0.1:7242/ingest/7c62393b-19b9-4b98-bcc6-28b0fa5c1bbb";

export function DebugPing({ runId, hasWhatIsSection, note }: DebugPingProps) {
  // #region agent log
  useEffect(() => {
    const basePayload = {
      sessionId: "debug-session",
      runId,
      hypothesisId: "A",
      location: "components/debug-ping.tsx:useEffect",
      timestamp: Date.now(),
    };

    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...basePayload,
        message: "debug_mount_start",
        data: { hasWhatIsSection, note },
      }),
    }).catch(() => {});

    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...basePayload,
        message: "debug_mount_confirm",
        data: { hasWhatIsSection, note },
      }),
    }).catch(() => {});

    fetch(DEBUG_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...basePayload,
        message: "debug_mount_marker",
        data: { hasWhatIsSection, note },
      }),
    }).catch(() => {});
  }, [runId, hasWhatIsSection, note]);
  // #endregion

  return null;
}

