const month = 3;

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("unknown month");

        break;
}

//If we don't use break after a case all the following code will run, EXCEPT the default case.