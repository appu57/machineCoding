import { useState, useEffect } from 'react';

export default function App() {
  const [limit] = useState(3);
  const [runningTasks, setRunningTasks] = useState([]);
  const [waitingQueue, setWaitingQueue] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    const newTask = { id: taskId, progress: 0 };
    setTaskId(prev => prev + 1);

    if (runningTasks.length < limit) {
      setRunningTasks(prev => [...prev, newTask]);
    } else {
      setWaitingQueue(prev => [...prev, newTask]);
    }
  };

  useEffect(() => {
    runningTasks.forEach(task => {
      if (task.progress >= 100) return; // Skip finished tasks

      const interval = setInterval(() => {
        setRunningTasks(prevTasks =>
          prevTasks.map(t =>
            t.id === task.id && t.progress < 100
              ? { ...t, progress: t.progress + 10 }
              : t
          )
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        // Move to next task in queue after finishing
        setRunningTasks(prev => prev.filter(t => t.id !== task.id));
        setWaitingQueue(prevQueue => {
          if (prevQueue.length > 0) {
            const [nextTask, ...rest] = prevQueue;
            setRunningTasks(prevRunning => [...prevRunning, nextTask]);
            return rest;
          }
          return prevQueue;
        });
      }, 1000);

      return () => clearInterval(interval);
    });
  }, [runningTasks]);

  const clearAll = () => {
    setRunningTasks([]);
    setWaitingQueue([]);
    setTaskId(1);
  };

  return (
    <div className="wrapper">
      <div className="button__wrapper">
        <button onClick={addTask}>Add Progress Bar</button>
        <button onClick={clearAll}>Clear Progress Bars</button>
      </div>

      <div className="progress__bar">
        {runningTasks.map(task => (
          <div className="progress" key={task.id}>
            <div
              className="inner__progress__bar"
              style={{
                width: `${task.progress}%`,
                backgroundColor: 'green',
                height: '20px',
                marginBottom: '5px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

//perfect

import { useState, useEffect } from 'react';

export default function App() {
  const [limit] = useState(3);
  const [runningTasks, setRunningTasks] = useState([]);
  const [waitingQueue, setWaitingQueue] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = () => {
    const newTask = { id: taskId, progress: 0 };
    setTaskId(prev => prev + 1);

    if (runningTasks.length < limit) {
      setRunningTasks(prev => [...prev, newTask]);
    } else {
      setWaitingQueue(prev => [...prev, newTask]);
    }
  };

  useEffect(() => {
    runningTasks.forEach(task => {
      if (task.progress >= 100) return; // Skip finished tasks

      const interval = setInterval(() => {
        setRunningTasks(prevTasks =>
          prevTasks.map(t =>
            t.id === task.id && t.progress < 100
              ? { ...t, progress: t.progress + 10 }
              : t
          )
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        // Move to next task in queue after finishing
        setRunningTasks(prev => prev.filter(t => t.id !== task.id));
        setWaitingQueue(prevQueue => {
          if (prevQueue.length > 0) {
            const [nextTask, ...rest] = prevQueue;
            setRunningTasks(prevRunning => [...prevRunning, nextTask]);
            return rest;
          }
          return prevQueue;
        });
      }, 1000);

      return () => clearInterval(interval);
    });
  }, [runningTasks]);

  const clearAll = () => {
    setRunningTasks([]);
    setWaitingQueue([]);
    setTaskId(1);
  };

  return (
    <div className="wrapper">
      <div className="button__wrapper">
        <button onClick={addTask}>Add Progress Bar</button>
        <button onClick={clearAll}>Clear Progress Bars</button>
      </div>

      <div className="progress__bar">
        {runningTasks.map(task => (
          <div className="progress" key={task.id}>
            <div
              className="inner__progress__bar"
              style={{
                width: `${task.progress}%`,
                backgroundColor: 'green',
                height: '20px',
                marginBottom: '5px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


//OPTIMISED

import { useState, useEffect, useRef } from 'react';

export default function App() {
  const CONCURRENCY_LIMIT = 3;
  const [taskIdCounter, setTaskIdCounter] = useState(1);
  const [tasks, setTasks] = useState([]); // All tasks: both running and waiting

  const runningTasks = tasks.filter(task => task.status === 'running');
  const waitingTasks = tasks.filter(task => task.status === 'waiting');

  const addTask = () => {
    const newTask = {
      id: taskIdCounter,
      progress: 0,
      status: runningTasks.length < CONCURRENCY_LIMIT ? 'running' : 'waiting',
    };
    setTaskIdCounter(prev => prev + 1);
    setTasks(prev => [...prev, newTask]);
  };

  // Effect to handle progress increment for running tasks
  useEffect(() => {
    const intervals = new Map();

    runningTasks.forEach(task => {
      if (task.progress >= 100 || intervals.has(task.id)) return;

      const interval = setInterval(() => {
        setTasks(prev =>
          prev.map(t =>
            t.id === task.id
              ? { ...t, progress: Math.min(t.progress + 10, 100) }
              : t
          )
        );
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        intervals.delete(task.id);
        // Mark task complete and promote waiting task
        setTasks(prev => {
          const updated = prev.map(t =>
            t.id === task.id ? { ...t, status: 'completed' } : t
          );
          const next = updated.find(t => t.status === 'waiting');
          if (next) {
            return updated.map(t =>
              t.id === next.id ? { ...t, status: 'running' } : t
            );
          }
          return updated;
        });
      }, 1000);

      intervals.set(task.id, interval);
    });

    // Cleanup
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [runningTasks]);

  const clearAll = () => {
    setTasks([]);
    setTaskIdCounter(1);
  };

  return (
    <div className="wrapper">
      <div className="button__wrapper" style={{ marginBottom: '20px' }}>
        <button onClick={addTask}>Add Progress Bar</button>
        <button onClick={clearAll}>Clear Progress Bars</button>
      </div>

      <div className="progress__bar">
        {tasks
          .filter(task => task.status !== 'completed')
          .map(task => (
            <div className="progress" key={task.id} style={{ marginBottom: '10px' }}>
              <div
                className="inner__progress__bar"
                style={{
                  width: `${task.progress}%`,
                  backgroundColor: 'green',
                  height: '20px',
                  transition: 'width 100ms ease-in-out',
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

//
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [queue, setQueue] = useState([]);
  const [runningTasks, setRunningTasks] = useState([]);
  const [currRunningTasks, setcurrRunningTasks] = useState(0);
  const handleClick = (e) => {
    let queueELements = queue;
    let currentTask = runningTasks.length;
    let currTaskValue = {
      id: queueELements.length + 1,
      progress: 0,
      isRunning: false,
      increaseSpeed: Math.random(10),
    };
    setQueue((prev) => [...prev, currTaskValue]);
    if (currentTask < 3) {
      setRunningTasks((prev) => [...prev, currTaskValue]);
      setcurrRunningTasks((prev) => prev + 1);
    }
    console.log("queue", queue);
  };

  useEffect(() => {
    console.log("runningTaks", runningTasks);
    async function runAsyncTask() {
      runningTasks.forEach((task) => {
        let timeout = setInterval(() => {
          if (task.progress == 100) {
            return;
          }
          if (task.progress + task.increaseSpeed <= 100) {
            task.progress = task.progress + 10;
            setQueue((prevQueue) =>
              prevQueue.map((t) =>
                t.id === task.id ? { ...t, progress: task.progress } : t
              )
            );
          }
        }, 1000);
        setTimeout(() => {
          clearInterval(timeout);
          let currTaskValue = {
            id: runningTasks.length + 1, //mistake
            progress: 0,
            isRunning: false,
            increaseSpeed: Math.random(10),
          };
          setRunningTasks((prev) => [...prev, currTaskValue]);
        }, 10000);
      });
    }
    runAsyncTask();
  }, [runningTasks]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="button__wrapper">
          <button onClick={handleClick}>Add Progress Bar</button>
          <button
            onClick={(e) => {
              setRunningTasks([]);
            }}
          >
            Clear Progress Bar
          </button>
        </div>
        <div className="progress__bar">
          {queue &&
            queue.map(
              (item, index) =>
                item.progress != 100 && (
                  <div className="progress__bar__wrapper">
                    <p>Task {item?.id}</p>

                    <div className="progress">
                      <div
                        className="inner__progress__bar"
                        style={{
                          width: `${item?.progress}%`,
                          backgroundColor: "green",
                        }}
                      ></div>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
}


