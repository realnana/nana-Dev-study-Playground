#include <stdio.h>
#include <stdlib.h>

typedef struct _node {
    int data;
    struct _node* next;
} Node;

int main() {
    int N;
    scanf("%d", &N);

    Node* head = NULL;
    Node* tail = NULL;
    Node* cur = NULL;
    Node* newNode = NULL;

    for (int i = 1; i <= N; i++) {
        newNode = (Node*)malloc(sizeof(Node));
        newNode->data = i;
        newNode->next = NULL;

        if (head == NULL) head = newNode;
        else tail->next = newNode;

        tail = newNode;
    }

    if (head == NULL) return 0;
    else {
        cur = head;
        printf("%d ", cur->data);

        while (cur->next != NULL) {
            tail->next = cur->next;
            cur = cur->next->next;
            tail = tail->next;
            printf("%d ", cur->data);

            if (tail->data == tail->next->data) break;
        }
    }
    return 0;
}