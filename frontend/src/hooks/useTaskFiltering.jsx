import { useState } from "react";

export default function useTaskFiltering(tasks) {
    const [selectedPriority, setSelectedPriority] = useState("");
    const [selectedDueDate, setSelectedDueDate] = useState("");
    const [selectedTask, setSelectedTask] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const getUniqueValues = (key) => [...new Set(tasks.map((task) => task[key]))];
    const uniquePriorities = getUniqueValues("priority");
    const uniqueDueDates = getUniqueValues("dueDate");

    const handlePreviewData = (task) => {
        setSelectedTask(task);
        setIsExpanded(true);
    };

    return {
        selectedPriority,
        setSelectedPriority,
        selectedDueDate,
        setSelectedDueDate,
        selectedTask,
        setSelectedTask,
        isExpanded,
        setIsExpanded,
        uniquePriorities,
        uniqueDueDates,
        handlePreviewData,
    };
}