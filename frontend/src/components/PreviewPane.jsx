import { X } from "lucide-react";

/* eslint-disable react/prop-types */
export default function PreviewPane({ task, closeTask }) {
    if (!task) {
        return <div>No task selected</div>;
    }

    const { title, description, priority, dueDate, username } = task;
    const newPriority = priority.charAt(0).toUpperCase() + priority.slice(1);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-GB', options);
    };

    return (
        <div className="w-full h-full">
            <button onClick={closeTask} className="mb-5"><X className="hover:text-purple-700" /></button>
            <article className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold">{title}</h2>
                <p className="text-md">{description}</p>
                <div>
                    <p><span className="font-semibold">Priority:</span> {newPriority}</p>
                    <p><span className="font-semibold">Due Date:</span> {formatDate(dueDate)}</p>
                    <p><span className="font-semibold">Created by:</span> {username}</p>
                </div>
            </article>
        </div>
    );
}
