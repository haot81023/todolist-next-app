export default function TodoItem({ task, index, onDelete, onEdit }) {
    return (
        <li className="p-2 border-b border-gray-300 bg-gray-100 flex justify-between">
            <span>{index + 1}. {task}</span>
            <div>
                <button onClick={() => onEdit(index) } className="text-blue-500 mr-2 border-b border-red-500">Sửa</button>
                <button onClick={() => onDelete(index)} className="text-red-500 border-b border-blue-500">Xóa</button>
            </div>
        </li>
    );
}
