#include <stdio.h>

int main() {
    int e,s,m;
    scanf("%d %d %d", &e, &s, &m);

    int a = 1, b = 1, c = 1;
    int cnt = 0;

    while(1) {
        cnt++;
        if (e == a && s == b && m == c)
            break;

        a++;
        b++;
        c++;

        if (a==16)
            a=1;
        if (b==29)
            b=1;
        if (c==20)
            c=1;
    }
    printf("%d\n", cnt);
}
