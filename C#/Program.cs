Console.WriteLine("Hello, World!!!");

// This is C# algorithm and in leetcode

public class Solution {
    public int[] TwoSum(int[] nums, int target) 
    {
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i+1; j < nums.Length; j++)
            {
                if(nums[i] + nums[j] == target)
                {
                    return new int[]{i,j};
                }
            }
        }
        throw new System.Exception("Failure");
    }

    public int[] TwoSumDic(int[] nums, int target)
    {
        Dictionary<int, int> twosum = new Dictionary<int, int>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (twosum.ContainsKey(target - nums[i]))
            {
                return new int[] {twosum[target - nums[i]], i};
            }
            else
            {
                twosum[nums[i]] = i;
            }
        }
        return new int[] {0,0};
    }
}

