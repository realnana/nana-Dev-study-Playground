// 이 문제에서는 파티에 참석한 실제 인원수를 계산하고, 이를 다섯 개의 신문 기사에 실린 참가자 수와 비교하여 차이를 구하는 것
// 각 신문이 보도한 참가자 수가 얼마나 정확한지 혹은 얼마나 오류가 있는지 찾는 것이 목표
# include <stdio.h>

int main() {
    int l,p,num[5];

    scanf("%d %d", &l, &p);

    for(int i=0; i<5; i++) {
        scanf("%d", &num[i]);
    }

    for(int i=0; i<5; i++) {
        printf("%d ", num[i]-l*p);
    }
}
