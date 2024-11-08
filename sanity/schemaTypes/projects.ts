export default {
    name:"projects",
    type:"document",
    title:'Project',
    fields:[
        {
            type:'string',
            name:'title',
            title:'Title'
        },
        {
            type:'string',
            name:'artist',
            title:"Artist"
        },

        {
            type:'slug',
            name:'slug',
            title:'Slug',
            options:{
                source:'title'
            }

        },
        {
            type:'reference',
            name:'category',
            title:"Category",
            to:[{type:'categories'}]
        },
        {
            type:'array',
            name:'content',
            title: 'content',
            of:[{
                type:'object',
                name:'sections',
                title:'Sections',
                fields:[
                    {
                        type:'string',
                        name:'vidId',
                        title:"Video ID"
                    },
                    {
                        type:"image",
                        name:"cover",
                        title:'Cover'

                    },
                    {
                        type:'array',
                        name:'content',
                        of:[{
                            type:'block'
                        }]
                    },
                    {
                        type:'mux.video',
                        name:'video',
                        title:"Video"
                    }
            ]
            }]
        },
        {
            type:"image",
            name:"cover",
            title:'Cover'

        },
        {
            type:'mux.video',
            name:'vidCover',
            title:"Video Cover"
        }

    ]
}