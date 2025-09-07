<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Startup Buddy - Live Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
            color: #c9d1d9;
            line-height: 1.6;
            padding: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .container {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding: 30px;
            background: #161b22;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: #58a6ff;
        }
        
        h2 {
            font-size: 1.8rem;
            margin: 25px 0 15px;
            color: #58a6ff;
            padding-bottom: 10px;
            border-bottom: 2px solid #30363d;
        }
        
        p {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        .section {
            background: #161b22;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            margin-bottom: 25px;
            border: 1px solid #21262d;
        }
        
        .code-block {
            background: #0d1117;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            overflow-x: auto;
            border: 1px solid #30363d;
            font-family: 'Fira Code', monospace;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .preview {
            background: #0d1117;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
            border: 1px solid #30363d;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
        }
        
        .preview-content {
            padding: 20px;
            border-radius: 8px;
            background: #161b22;
        }
        
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: linear-gradient(90deg, #238636 0%, #2ea043 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            margin-top: 10px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(46, 160, 67, 0.3);
        }
        
        .live-demo {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, #161b22 0%, #1c2128 100%);
            border-radius: 12px;
            margin: 30px 0;
            border: 1px solid #30363d;
        }
        
        .live-demo h2 {
            border: none;
            margin-top: 0;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 30px;
            border-top: 1px solid #30363d;
            font-size: 0.9rem;
            color: #8b949e;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.2rem;
            }
            
            h2 {
                font-size: 1.6rem;
            }
        }
        
        .instructions {
            background: linear-gradient(90deg, rgba(63, 185, 80, 0.1) 0%, rgba(63, 185, 80, 0.05) 100%);
            border-left: 4px solid #3fb950;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        
        .instructions-title {
            font-weight: 600;
            color: #3fb950;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1><i class="fas fa-rocket"></i> Startup Buddy Showcase</h1>
            <p>A responsive React + Vite + Tailwind CSS web app to showcase startups</p>
        </header>
        
        <div class="live-demo">
            <h2><i class="fas fa-globe"></i> Live Demo</h2>
            <p>Your Startup Buddy app is now live on Vercel!</p>
            <a href="https://startup-buddy-murex.vercel.app/" class="btn">
                <i class="fas fa-external-link-alt"></i> Visit Live Site
            </a>
        </div>
        
        <div class="section">
            <h2><i class="fas fa-book"></i> Your README with Live Demo</h2>
            <p>Simply add the "Live Demo" section to your README as shown below:</p>
            
            <div class="instructions">
                <div class="instructions-title">
                    <i class="fas fa-info-circle"></i> Instructions
                </div>
                <p>Copy the code below and add it to your README.md file, right above the "Quick Start" section.</p>
            </div>
            
            <div class="code-block">
                <code>
# Startup Buddy Showcase

A **responsive React + Vite + Tailwind CSS** web app to showcase startups. Search, filter, explore, and submit startup profiles with a clean and interactive UI.

---

## Features
- Search startups  
- Responsive design (mobile & desktop)  
- Submit new startups via form  
- Smooth animations & dynamic cards  

---

## Tech Stack
- React + Vite  
- Tailwind CSS  
- Deployed on Vercel  

---

## Live Demo

➡️ [View Live Demo](https://startup-buddy-murex.vercel.app/)

---

## Quick Start
```bash
git clone https://github.com/your-username/startup-buddy.git
cd startup-buddy
npm install
npm run dev