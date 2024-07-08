
#include <stdio.h>
#include <string.h>

#define MAX_SIZE 100001

char s[MAX_SIZE];
int temp = 0;

void check(int st, int ed) {
    int sum_front = 0;
    int sum_back = 0;
    int half = (ed + 1) / 2;
    for (int k = st; k <= st + half - 1; k++) {
        sum_front += s[k];
    }
    for (int k = st + half; k <= st + ed; k++) {
        sum_back += s[k];
    }

    if (sum_front == sum_back) {
        if (ed + 1 > temp) {
            temp = ed + 1;
        }
    }
}

int main() {

    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);

    scanf("%s", s);
    int length = strlen(s);

    for (int i = 0; i < length; i++) {
        for (int j = 1; j + i < length; j += 2) {
            check(i, j);
        }
    }

    printf("%d\n", temp);

    fclose(stdin);
    fclose(stdout);

    return 0;
}
