export default (instance, screens, call) => {
    if (screens) {
        for (let screen in screens) {
            if (screens.hasOwnProperty(screen)) {
                if (instance[screen]) {
                    instance[screen]((param) => {
                        call({ ...param, field: screen });
                    });
                }
            }
        }
    }
};