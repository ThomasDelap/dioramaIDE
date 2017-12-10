import React from 'react';

import MainLayout from './Main';
import NavTab from './utils/NavTab';

export default class App extends React.Component {

    render(){
        const menu = [
            {name: 'File', tabs: [
                [
                    {name: 'New...', shortcut: 'Ctrl+N'},
                    {name: 'Open', shortcut: 'Ctrl+O'},
                    {name: 'Synchronize...', shortcut: 'Ctrl+U', disabled: true},
                    {name: 'Save All', shortcut: 'Ctrl+S'}
                ],
                [
                    {name: 'Open Assets...', shortcut: 'Ctrl+Shift+R'},
                    {name: 'Search in Files', shortcut: 'Ctrl+Shift+F'}
                ],
                [
                    {name: 'Close', shortcut: 'Ctrl+W'},
                    {name: 'Close All', shortcut: 'Ctrl+Shift+W'},
                    {name: 'Close Others'}
                ],
                [
                    {name: 'Preferences', shortcut: 'Ctrl+,'},
                    {name: 'Quit', shortcut: 'Ctrl+Q'}
                ]
            ]},
            {name: 'Edit', tabs: [
                [
                    {name: 'Undo', shortcut: 'Ctrl+Z'},
                    {name: 'Redo', shortcut: 'Ctrl+Y'}
                ],
                [
                    {name: 'Cut', shortcut: 'Ctrl+X'},
                    {name: 'Delete', shortcut: 'Delete'},
                    {name: 'Copy', shortcut: 'Ctrl+C'},
                    {name: 'Paste', shortcut: 'Ctrl+V'},
                ]
            ]},
            {name: 'Project', tabs: []},
            {name: 'View', tabs: []},
            {name: 'Help', tabs: []}
        ]

        return (

            <div className="app">
                <nav className="nav">
                    {menu.map((item, i) => (
                        <NavTab name={item.name} tabs={item.tabs} key={i} />
                    ))}
                </nav>

                <MainLayout />

                <footer className="footer">
                    <div className="footer-information">
                        <p className="footer-information-file">src\components\App.js*</p>
                        <p>19:24</p>
                    </div>

                    <div className="footer-actions">
                        <p>UTF-8</p>
                        <p>Javascript with JSX</p>
                        <p>Launch debug</p>
                    </div>
                </footer>
            </div>

        )
    }
}
