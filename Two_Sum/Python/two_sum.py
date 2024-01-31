from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """Return index of elements in the nums that can add up to targer.

        Args:
         nums: list of intigers
         targer: intiger

        Returns:
         list: list of two intiger.
        
        """

        # Approach two pointer
        # Time complexity O(n)
        # Space complexity O(n)

        # create a cache dict.

        cache_dict = {}

        for i in range(len(nums)):
            target_num = -1 * (- target + nums[i] )

            if nums[i] in cache_dict:
                return [cache_dict[nums[i]], i]
            cache_dict[target_num] = i
        return None


if __name__ == "__main__":
    r = Solution()
    result = r.twoSum([2,7,11,15], 9) 
    print(result)