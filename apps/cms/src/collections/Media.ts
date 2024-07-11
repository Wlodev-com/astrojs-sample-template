import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
    slug: 'media',
    upload: true,
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            label: 'ALT - Alternative Text',
            admin: {
                description:
                    'Tekst, który zostanie wyświetlony w przypadku, gdy obrazek nie może być wyświetlony, np. gdy odwiedzający korzysta z czytnika ekranowego lub gdy obrazek nie załadował się poprawnie.',
            },
            type: 'text',
        },
    ],
}
