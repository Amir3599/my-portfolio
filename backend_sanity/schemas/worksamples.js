export default {
    name: 'worksamples',
    title: 'Work Samples',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'tags',
            options: {
                includeFromRelated: 'tags',
                predefinedTags : [
                    {label: 'ReactJS', value: 'reactjs'},
                    {label: 'tailwindcss', value: 'tailwindcss'},
                    {label: 'sanity', value: 'sanity'},
                    {label: 'headlessCMS', value: 'headlesscms'},
                    {label: 'FramerMotion', value: 'framermotion'},
                    {label: 'JavaScript', value: 'javascript'},
                    {label: 'CSS', value: 'css'},
                    {label: 'HTML', value: 'html'},
                ]
            }
        }
    ],
}