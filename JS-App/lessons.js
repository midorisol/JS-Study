
    const lesson1 = {
        name: 'Modern JavaScript és webfejlesztés alapok ismétlése',
        duration: 75,
        isCompleted: false
    }
    
    const lesson2 = {
        name: 'Modern JavaScript gyakorlás',
        duration: 90,
        isCompleted: false
    }
    
    const lesson3 = {
        name: 'HTTP és aszinkronitás',
        duration: 88,
        isCompleted: false
    }
    
    const lesson4 = {
        name: 'HTTP és aszinkronitás gyakorlás',
        duration: 93,
        isCompleted: false
    }
    
    const lesson5 = {
        name: 'Haladó CSS (FlexBox és Grid)',
        duration: 80,
        isCompleted: false
    }
    
    const lesson6 = {
        name: 'WebComponents',
        duration: 76,
        isCompleted: false
    }
    
    const lesson7 = {
        name: 'Időjárás alkalmazás 1.',
        duration: 70,
        isCompleted: false
    }
    
    const lesson8 = {
        name: 'Időjárás alkalmazás 2.',
        duration: 84,
        isCompleted: false
    }

const lessons = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
];

export const initLessons = () => {
    lessons.forEach( l => console.log(l));
}


