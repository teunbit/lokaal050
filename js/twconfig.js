const primary_color = '#FFDB01';

const base_color = '#fffff0';

const heading_color = '#302b28';

const fontstack_heading = ['Special Elite', 'Cursive'];

tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary': primary_color,
                'heading': heading_color,
                'base': base_color,
            },
            fontFamily: {
                'heading': fontstack_heading,
            }
        }
    }
}
