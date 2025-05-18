import React, { useState, useEffect } from 'react'
import { 
  HiOutlineClipboardList, HiOutlineTrash, HiOutlineCheck, 
  HiOutlineViewBoards, HiOutlineTag, HiOutlineMenuAlt2
} from 'react-icons/hi'

const Content = ({items, click, del}) => {
    // For debugging
    useEffect(() => {
        console.log("Current items:", items);
    }, [items]);

    // Add debugging to check categorization
    useEffect(() => {
        if (items.length > 0) {
            console.log("All items:", items);
            
            // Log how each item is categorized
            items.forEach(item => {
                const category = getTaskCategory(item.item);
                console.log(`Item: "${item.item}" → Category: "${category}"`);
            });
            
            // Log grouped tasks
            console.log("Grouped tasks:", groupedTasks);
        }
    }, [items]);

    // Group tasks by category (derived from first word before colon)
    const getTaskCategory = (task) => {
        if (!task || typeof task !== 'string') {
            console.log("Task is invalid:", task);
            return 'General';
        }
        
        // Improved regex to handle category extraction
        // This will match text before the first colon, even with spaces
        const match = task.match(/^([^:]+):/);
        const category = match ? match[1].trim() : 'General';
        return category;
    };
    
    // Ensure high contrast for category colors
    const categoryColors = {
        'Work': '#2b6cb0',       // Darker blue for better contrast
        'Home': '#2f855a',       // Darker green
        'Study': '#6b46c1',      // Darker purple
        'Personal': '#c53030',   // Darker red
        'Shopping': '#b7791f',   // Darker yellow
        'Health': '#2f855a',     // Darker green
        'General': '#4a5568'     // Darker gray
    };
    
    // Get task title without category prefix
    const getTaskTitle = (task) => {
        if (!task || typeof task !== 'string') return '';
        const parts = task.split(':');
        return parts.length > 1 ? parts.slice(1).join(':').trim() : task.trim();
    };
    
    // Group items by category - only include tasks with content
    const groupedTasks = {};
    items.forEach(item => {
        if (item && item.item && typeof item.item === 'string' && item.item.trim()) {
            const category = getTaskCategory(item.item);
            if (!groupedTasks[category]) {
                groupedTasks[category] = [];
            }
            groupedTasks[category].push(item);
        }
    });
    
    // Toggle between list and category views
    const [viewMode, setViewMode] = useState('category'); // 'category' or 'list'
    
    return (
        <main className="dashboard-main">
            <div className="dashboard-header">
                <h2>My Tasks</h2>
                <div className="view-toggles">
                    <button 
                        className={`view-toggle ${viewMode === 'category' ? 'active' : ''}`}
                        onClick={() => setViewMode('category')}
                        title="Category View"
                    >
                        <HiOutlineViewBoards /> <span>Categories</span>
                    </button>
                    <button 
                        className={`view-toggle ${viewMode === 'list' ? 'active' : ''}`}
                        onClick={() => setViewMode('list')}
                        title="List View"
                    >
                        <HiOutlineMenuAlt2 /> <span>List</span>
                    </button>
                </div>
            </div>
            
            {viewMode === 'category' ? (
                // Category View
                <div className="category-container">
                    {Object.keys(groupedTasks).length > 0 ? (
                        Object.keys(groupedTasks).map(category => (
                            <div className="category-section" key={category}>
                                <div className="category-header" 
                                    style={{backgroundColor: categoryColors[category] || categoryColors['General']}}>
                                    <HiOutlineTag className="category-icon" />
                                    <h3>{category}</h3>
                                    <span className="task-count">{groupedTasks[category].length}</span>
                                </div>
                                <div className="category-tasks">
                                    {groupedTasks[category].map(item => (
                                        <div className={`task-item ${item.checked ? 'completed' : ''}`} key={item.id}>
                                            <div className="task-checkbox" onClick={() => click(item.id)}>
                                                {item.checked ? 
                                                    <div className="checked"><HiOutlineCheck /></div> : 
                                                    <div className="unchecked"></div>
                                                }
                                            </div>
                                            <div className="task-content">
                                                <p className="visible-task-text">{getTaskTitle(item.item)}</p>
                                            </div>
                                            <button className="task-delete" onClick={() => del(item.id)} title="Delete Task">
                                                <HiOutlineTrash />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-dashboard">
                            <div className="empty-icon">
                                <HiOutlineClipboardList />
                            </div>
                            <h3>Your task board is empty</h3>
                            <p>Try adding tasks like "Work: Finish project" or "Home: Clean kitchen"</p>
                        </div>
                    )}
                </div>
            ) : (
                // List View
                <div className="list-container">
                    {items.length > 0 ? (
                        <div className="task-list">
                            {items.map(item => {
                                const category = getTaskCategory(item.item);
                                return (
                                    <div className={`list-task-item ${item.checked ? 'completed' : ''}`} key={item.id}>
                                        <div className="task-left">
                                            <div className="task-checkbox" onClick={() => click(item.id)}>
                                                {item.checked ? 
                                                    <div className="checked"><HiOutlineCheck /></div> : 
                                                    <div className="unchecked"></div>
                                                }
                                            </div>
                                            <div className="task-content">
                                                <p className="visible-task-text">{getTaskTitle(item.item)}</p>
                                                <div 
                                                    className="task-tag" 
                                                    style={{backgroundColor: categoryColors[category] || categoryColors['General']}}
                                                >
                                                    {category}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="task-delete visible" onClick={() => del(item.id)} title="Delete Task">
                                            <HiOutlineTrash />
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="empty-dashboard">
                            <div className="empty-icon">
                                <HiOutlineClipboardList />
                            </div>
                            <h3>Your task list is empty</h3>
                            <p>Add new tasks to get started</p>
                        </div>
                    )}
                </div>
            )}
        </main>
    )
}

export default Content