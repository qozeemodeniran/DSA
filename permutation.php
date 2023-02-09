<?php 
function heapPermutation($a, $size)
{
    if ($size == 1) {
        print_r($a);
        return;
    }

    for ($i = 0; $i < $size; $i++) {
        heapPermutation($a, $size - 1);
        if ($size & 1) {
            list($a[0], $a[$size - 1]) = array($a[$size - 1], $a[0]);
        } else {
            list($a[$i], $a[$size - 1]) = array($a[$size - 1], $a[$i]);
        }
    }
}

$size = 5;
$a = range(1, $size + 1);
heapPermutation($a, $size);

?>