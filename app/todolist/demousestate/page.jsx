"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";

export default function NotesManager() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddNote = () => {
        if (title.trim() === "" || content.trim() === "") return;
        const newNote = { title, content, date: new Date().toLocaleString() };
        setNotes([...notes, newNote]);
        setTitle("");
        setContent("");
        setIsEditing(false);
    };

    const handleEditNote = (index) => {
        const note = notes[index];
        setTitle(note.title);
        setContent(note.content);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleUpdateNote = () => {
        const updatedNotes = notes.map((note, index) =>
            index === editIndex ? { ...note, title, content } : note
        );
        setNotes(updatedNotes);
        setTitle("");
        setContent("");
        setIsEditing(false);
        setEditIndex(null);
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-2">
                <Input
                    type="text"
                    placeholder="Tìm kiếm ghi chú..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
                <Search className="text-gray-500" size={24} />
            </div>
            <div>
                <Input
                    type="text"
                    placeholder="Tiêu đề"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mb-2"
                />
                <Textarea
                    placeholder="Nội dung"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mb-4"
                />
                {isEditing ? (
                    <Button onClick={handleUpdateNote} className="bg-blue-500 text-white w-full">Cập nhật ghi chú</Button>
                ) : (
                    <Button onClick={handleAddNote} className="bg-green-500 text-white w-full">Thêm ghi chú</Button>
                )}
            </div>
            <div className="space-y-4">
                {filteredNotes.map((note, index) => (
                    <Card key={index} className="bg-white shadow-md rounded-2xl p-4">
                        <CardContent>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{note.title}</h3>
                            <p className="text-gray-600 mb-2">{note.content}</p>
                            <p className="text-sm text-gray-400">{note.date}</p>
                            <div className="flex gap-4 mt-2">
                                <Button onClick={() => handleEditNote(index)} className="bg-yellow-400 text-black">Sửa</Button>
                                <Button onClick={() => handleDeleteNote(index)} className="bg-red-500 text-white">Xóa</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
