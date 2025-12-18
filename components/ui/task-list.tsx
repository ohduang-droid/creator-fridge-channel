"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface Task {
  id: number | string
  logo: React.ReactNode
  logoImageUrl?: string | null
  creatorName: string
  newsletterName: string
  websiteUrl: string
}

export interface TaskListProps {
  title?: string
  tasks: Task[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
}

export const TaskList: React.FC<TaskListProps> = ({
  title = "Task List",
  tasks,
}) => {
  if (tasks.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-muted-foreground text-sm">No items to display.</p>
      </div>
    )
  }

  // Generate a key based on tasks to force re-animation when tasks change
  const tasksKey = tasks.map(t => t.id).join(',')

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          {/* <thead>
            <tr className="border-b border-border">
              <th className="p-4 text-muted-foreground font-medium w-16"></th>
              <th className="p-4 text-muted-foreground font-medium">Creator</th>
              <th className="p-4 text-muted-foreground font-medium">Newsletter</th>
              <th className="p-4 text-center text-muted-foreground font-medium w-16">Link</th>
            </tr>
          </thead> */}
          <motion.tbody
            key={tasksKey}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tasks.map((task, index) => (
              <motion.tr
                key={task.id}
                variants={itemVariants}
                className="border-b border-border last:border-none hover:bg-muted/50"
              >
                  <td className="p-4 align-middle">
                    <div className="flex items-center justify-center">
                      {task.logoImageUrl ? (
                        <img
                          src={task.logoImageUrl}
                          alt={task.creatorName}
                          className="inline-flex h-10 w-10 rounded-md object-cover"
                        />
                      ) : (
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted text-xl">
                          {task.logo}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 font-medium align-middle">
                    {task.creatorName}
                  </td>
                  <td className="p-4 text-muted-foreground align-middle">
                    {task.newsletterName}
                  </td>
                  <td className="p-4 text-center align-middle">
                    <a
                      href={task.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center justify-center text-primary hover:text-primary/80"
                      )}
                      aria-label="Open website"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </td>
                </motion.tr>
              ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  )
}


