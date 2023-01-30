export default {
    name: 'testi',
    type: 'document',
    title: 'Testi',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'company',
            type: 'string',
            title: 'Company'
        },
        {
            name: 'imageurl',
            type: 'image',
            title: 'ImageUrl',
            options: { hotspot: true }
        },
        {
            name: 'feedback',
            type: 'string',
            title: 'Feedback'
        }
    ]
}