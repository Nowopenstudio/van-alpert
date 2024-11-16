export default {
    name:"feature",
    type:"document",
    title:'Featred Work',
    fields:[
        
        {
            name:'featProjects',
            type:'array',
            title:'Projects',
            of:[{
                type:'reference',
                name:'project',
                title:"Project",
                to:[{type:'projects'
    
                }]
            }]
        }

    ]
}