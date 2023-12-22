/* eslint-disable react/prop-types */



import { useDrag } from 'react-dnd';

const DraggableTask = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`px-3 py-2 bg-gray-500 shadow-md mb-2 ${isDragging ? 'opacity-50' : ''}`}
    >
      {task.title}
    </div>
  );

};

export default DraggableTask;
