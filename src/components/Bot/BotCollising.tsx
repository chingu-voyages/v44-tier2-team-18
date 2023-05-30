type operationProps = string

export const botCollising = (value1: string, value2: string, operation: operationProps) => {
    switch (operation) {
        case "and": {
            if (value1 === "1" && value2 === "1") {
                return 1
            } else { return 0 };
            break;
        }
        case "or": {
            if (value1 === "0" && value2 === "0") {
                return 0
            } else { return 1 };
            break;
        }
        case "nor": {
            if (value1 === "0" && value2 === "0") {
                return 1
            } else { return 0 };
            break;
        }
        case "nand": {
            if (value1 === "1" && value2 === "1") {
                return 0
            } else { return 1 };
            break;
        }
    }
}
