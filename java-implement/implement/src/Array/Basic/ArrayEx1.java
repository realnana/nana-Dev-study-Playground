package Array.Basic;

// 1. 총합과 평균
public class ArrayEx1 {
    public static void main(String[] args) {
        int sum = 0;
        float avg = 0f;

        int[] score = { 100, 88, 100, 100, 90 };

        for (int i=0; i<score.length; i++) {
            sum += score[i];
        }
        avg = sum / (float)score.length;    // 계산결과를 float로 얻기 위해 형 변환

        System.out.println("총점 : " + sum);
        System.out.println("평균 : " + avg);
    }
}
