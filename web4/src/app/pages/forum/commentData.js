export const commentData = [
    {
        author: 'Arnold Smrtka',
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse sagittis ultrices augue. Praesent dapibus. In convallis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n' +
        '\n' +
        'Integer tempor. Donec iaculis gravida nulla. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Mauris metus. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Duis condimentum augue id magna semper rutrum. Maecenas libero. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Maecenas libero.',
        time: '11.11.2101',
    },
    {
        author: 'Pavel Velmi',
        text: 'Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis.',
        time: '12.11.2101',
        children: [
            {
                author: 'Oskar Špatný',
                text: 'Curabitur sagittis hendrerit ante.',
                time: '13.11.2101',
            },
            {
                author: 'Oskar Špatný',
                text: 'Also, fuck you.',
                time: '13.11.2101',
                children: [
                    {
                        author: 'Oskar Špatný',
                        text: 'Answering myself.',
                        time: '14.11.2101',
                    },
                ]
            },
        ]
    },
    {
        author: 'Rostislav Kamarád',
        text: "Pellentesque ipsum. Fusce tellus.\n" +
        "\n" +
        "Pellentesque arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        time: '11.11.2101',
    },
];