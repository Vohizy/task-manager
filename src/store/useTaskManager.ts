import { create } from "zustand";
/* cree une type de task */

type Task = {
  id: string;
  title: string;
};

type TaskStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
  searchTask: (query: string) => Task[];
};

const useTaskManager = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (title) => {
    const newTask: Task = {
      id: Math.random().toString(),
      title: title,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  updateTask: (id, title) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title: title } : task
      ),
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  searchTask: (query) => {
    return set((state) => ({
      tasks: state.tasks.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      ),
    }));
  },
}));

export { useTaskManager };
