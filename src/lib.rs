use js_sys::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn is_prime(num: i32) -> bool {
    if num == 2 {
        return true;
    }
    if num % 2 == 0 || num == 1 {
        return false;
    }
    for i in 3..num {
        if num % i == 0 {
            return false;
        }
    }
    return true;
}

fn bubble_sort(arr: &mut Vec<i32>, s: usize, e: usize) {
    for i in (s + 2..e + 1).rev() {
        for j in s + 1..i {
            if arr[j - 1] > arr[j] {
                arr.swap(j, j - 1);
            }
        }
    }
}

fn merge_sort(arr: &mut Vec<i32>, s: usize, e: usize, tmp: &mut Vec<i32>) {
    if e - s < 2 {
        return;
    }
    let middle = (s + e) / 2;
    merge_sort(arr, s, middle, tmp);
    merge_sort(arr, middle, e, tmp);
    let mut i = s;
    let mut j = middle;
    let mut k = s;
    while i < middle && j < e {
        if arr[i] < arr[j] {
            tmp[k] = arr[i];
            i += 1;
        } else {
            tmp[k] = arr[j];
            j += 1;
        }
        k += 1;
    }
    while i < middle {
        tmp[k] = arr[i];
        i += 1;
        k += 1;
    }
    while j < e {
        tmp[k] = arr[j];
        j += 1;
        k += 1;
    }
    k = s;
    while k < e {
        arr[k] = tmp[k];
        k += 1;
    }
}

#[wasm_bindgen]
pub fn bubble(js_arr: Int32Array) {
    let mut arr = js_arr.to_vec();
    let len = arr.len();
    bubble_sort(&mut arr, 0, len);
}

#[wasm_bindgen]
pub fn built_in(js_arr: Int32Array) {
    let mut arr = js_arr.to_vec();
    arr.sort();
}

#[wasm_bindgen]
pub fn merge(js_arr: Int32Array) {
    let mut arr = js_arr.to_vec();
    let len = arr.len();
    let mut tmp = vec![0; len];
    merge_sort(&mut arr, 0, len, &mut tmp);
}
