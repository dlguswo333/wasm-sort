use js_sys::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

fn is_prime(num: i32) -> bool {
    if num % 2 == 0 || num == 1 {
        return false;
    }
    for i in 1..num {
        if num % i == 0 {
            return false;
        }
    }
    return true;
}

fn bubble_sort(arr: &mut Vec<i32>, s: usize, e: usize) {
    for i in (s + 2..e + 1).rev() {
        for j in s+1..i {
            if arr[j - 1] > arr[j] {
                arr.swap(j, j - 1);
            }
        }
    }
}

#[wasm_bindgen]
pub fn bubble(js_arr: Int32Array) {
    let mut arr = js_arr.to_vec();
    let len = arr.len();
    bubble_sort(&mut arr, 0, len);
    // alert(&format!("{:?}", arr));
}

#[wasm_bindgen]
pub fn built_in(js_arr: Int32Array) {
    let mut arr = js_arr.to_vec();
    let len = arr.len();
    arr.sort();
}
