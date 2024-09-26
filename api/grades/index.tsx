




/* const {data, isLoading, error } = useQuery<[]>({
  queryKey: ['eligible'],
  queryFn: async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
});
 */