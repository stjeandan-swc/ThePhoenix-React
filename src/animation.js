export const pageAnim = {
    hidden: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            when: 'beforeChildren',
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        x: -300,
        duration: 0.25
    }
};