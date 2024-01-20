

export const navItemData: NavItemProps[] = [
    {
        title: "Home",
        icon: "line-md:home-simple",
        link: "/home",
    },
    {
        title: "About",
        icon: "line-md:home-simple",
        link: "/about",
    },
    {
        title: "Wall",
        icon: "tabler:border-left",
        
        dropdown: true,
        subMenu: [{title: "Lintel Calculator", icon: "material-symbols-light:calculate-outline", link: "/lintel"}
        ]
    },
    {
        title: "Roof",
        icon: "tabler:border-top",
        
        dropdown: true,
        subMenu: [{title: "Rafter Calculator", icon: "material-symbols-light:calculate-outline", link: "/rafter"}
        ]
    },
    
    {
        title: "Floor",
        icon: "tabler:border-bottom",
        
        dropdown: true,
        subMenu: [{title: "Joist Calculator", icon: "material-symbols-light:calculate-outline", link: "/joist"}
        ] 
    },
    
    
]