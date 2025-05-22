import { useEffect, useState } from 'react';
import { commands } from '../../datas/config';
import datas from "../../datas/datas.json";


const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('dark');

  const colors = datas.colors[mode];
  const username = datas.ps1_username;
  const hostname = datas.ps1_hostname;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    const output = commands[cmd] || [`Command not found: ${cmd}`];
    setHistory([...history, { cmd, output }]);
    setInput('');
  };

  const handleClear = () => {
    setHistory([]);
  };

  useEffect(() => {
    setHistory([{ cmd: 'banner', output: commands.banner }]);
  }, []);

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className="p-4 min-h-screen text-xl"
      style={{
        backgroundColor: colors.background,
        color: colors.foreground,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-4 px-3 py-1 rounded border text-sm"
        style={{
          backgroundColor: colors.foreground,
          color: colors.background
        }}
        onClick={toggleMode}
      >
        Switch to {mode === 'dark' ? 'Light' : 'Dark'} Mode
      </button>

      {/* Terminal History */}
      {history.map((item, index) => (
        <div key={index}>
          <p style={{ color: colors.blue }}>
            <span style={{ color: colors.green }}>{username}</span>
            <span style={{ color: colors.gray }}>@</span>
            <span style={{ color: colors.yellow }}>{hostname}</span>
            <span style={{ color: colors.gray }}>:$ ~ </span>
          </p>
          <br />
          {item.output.map((line, i) => (
            <p key={i} className="font-mono whitespace-pre text-sm">{line}</p>
          ))}
        </div>
      ))}

      {/* Command Input */}
      <form
        onSubmit={(e) => {
          if (input === 'clear') handleClear();
          else handleCommand(e);
        }}
      >
        <br />
        <span style={{ color: colors.green }}>{username}</span>
        <span style={{ color: colors.gray }}>@</span>
        <span style={{ color: colors.yellow }}>{hostname}</span>
        <span style={{ color: colors.gray }}>:$ ~ </span>
        <input
          autoFocus
          className="bg-transparent outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ color: colors.foreground }}
        />
      </form>
    </div>
  );
};

export default Terminal;
