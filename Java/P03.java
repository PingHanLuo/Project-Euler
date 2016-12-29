public class P03{
	public static void main(String[] args){
		int input = 600851475143, highest=0;
		for(int i=2;i<=input;i++){
			if(input==1){
				break;
			}
			if(num%i==0){
				num/=i;
				i--;
				highest=i;
			}
		}
		System.out.println(highest);
		//6857
	}
}