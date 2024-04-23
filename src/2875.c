#include <stdio.h>

int main() {
    int n,m,k;
    scanf("%d %d %d", &n, &m, &k);

    int max = n/2 < m ? n/2 : m;
    // 2 -> 여학생 3 -> 인턴쉽 참여 K

    k -= n+m - 3 * max;

    if (k>0) {
        k--;
        max -= k/3 + 1;
    }
    printf("%d\n", max);
}

