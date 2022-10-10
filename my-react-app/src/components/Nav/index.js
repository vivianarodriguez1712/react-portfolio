import React from 'react';

function Nav() {
    const contents = [{name:'About',link:'#about'}, {name:'Portfolio',link:'#portfolio'}, {name:'Contact',link:'#contact'}, {name:'Resume',link:'#resume'}]
    return (
        
        <ul class="navbar navbar-expand-lg bg-light navbar-brand">
            {contents.map((content) => 
            <li><a href={content.link}>{content.name}</a></li>)}
        </ul>
    );
}

export default Nav;