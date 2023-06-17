let value = prompt('Type a number', 0);

switch ( parseFloat(value)) {
    case 1:
	case 2:
	case 3:
	case 4:
	case 5:
        alert(1);
        break;
    case -1:
	case -2:
	case -3:
	case -4:
	case -5:
        alert(-1);
        break;
    default:
	   alert(0);
        break;
}