function getModel() { // AGAIN !!!!!!!!!????????????????????????
    let model = {
        init: (sel1, sel2, resSel) => {
            model.num1 = $(sel1);
            model.num2 = $(sel2);
            model.result = $(resSel);

        },
        add: () => model.action((a, b) => a + b),
        subtract: () => model.action((a, b) => a - b),
        action: function (operation) {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(operation(val1, val2));// ????????????
        }

    }
    return model;
}