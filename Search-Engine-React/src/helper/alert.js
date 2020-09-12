// imoprting swal from seetalert
import swal from "sweetalert";

// success function
export function successMessageAlert(title, message) {
  swal({
    title: title,
    text: message,
    icon: "success",
    button: "Ok",
  });
}

// error function
export function errorMessageAlert(title, error) {
  swal({
    title: title,
    text: error,
    icon: "warning",
    button: "Ok",
  });
}

// filed error function
export function filedMissingAlert(title, error) {
  swal({
    title: title,
    text: error,
    icon: "warning",
    button: "Ok",
  });
}
