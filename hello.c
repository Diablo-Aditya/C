#include <stdio.h>
#include <math.h>

int main(){
  printf(" how many elements do you want to enter? ");
  int n;
  scanf("%d", &n);
  int l = 5;
  for(int i=0; i<n; i++){

    l=l+(i*(i+1))/2;
           printf("%d,",l);

  }
  printf(".....");
 return 0;  
}
  
