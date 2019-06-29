import del from 'del';

const cleanSet = () => {
    return new Promise(resolve => {
        del.sync(['./build/index.html']);
        del.sync(['./build/html/**/*']);
        del.sync(['./build/css/**/*']);
        del.sync(['./build/js/**/*']);
        resolve();
    });
};

export default cleanSet;
