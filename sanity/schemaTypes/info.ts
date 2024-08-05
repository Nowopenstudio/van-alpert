export default {
    name:'info',
    type:'document',
    title:'Information',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'string',
            name:'desc',
            title:'Descriptor'
        },
        {
            type:'array',
            name:'about',
            title:"About",
            of:[{type:'block'}]
        },
        {
            type:'string',
            name:'phone',
            title:'phone'
        },
        {
            type:'string',
            name:'email',
            title:'Email'
        },

        {
            type:'array',
            name:'links',
            title:'Links',
            of:[{
                type:'object',
                name:'link',
                title:'Link Item',
                fields:[{
                    type:'string',
                    name:'linkTitle',
                    title:'Title'
                },
                {
                    type:'url',
                    name:'linkURL',
                    title:"URL" }]
                
        }]
    }
]
}   