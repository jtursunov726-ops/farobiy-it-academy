@echo off
rem Double-click this file to start the Farobiy site; it opens in your browser.
cd /d "%~dp0"
if not exist node_modules call npm.cmd install
call npm.cmd run dev -- --open
pause
