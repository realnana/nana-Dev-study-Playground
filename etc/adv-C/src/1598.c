#include <stdio.h>
#include <math.h>

int main(void) {
    int x, y, xw, yw, xh, yh;

    scanf("%d %d", &x, &y);

    xw = (x-1) / 4;
    yw = (y-1) / 4;

    xh = (x-1) % 4;
    yh = (y-1) % 4;

    printf("%d\n", abs(xw-yw) + abs(xh-yh));

    return 0;

}
