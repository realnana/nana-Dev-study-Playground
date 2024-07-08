#include <stdio.h>

int main() {
    long long num, ans = 0;
    char op;

    scanf("%lld", &num);
    ans = num;

    while(1) {
        scanf(" %c", &op);
        if (op == '=') {
            printf("%lld\n", ans);
            break;
        }

        scanf("%lld", &num);

        if(op == '+')
            ans += num;
        else if (op == '-')
            ans -= num;
        else if (op == '/')
            ans /= num;
    }
}

