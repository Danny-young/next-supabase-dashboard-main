import { createContext, ReactNode, useState, useEffect } from "react";
import { modules, eligibleStudents } from "./Actions";
import { Ieligible_students, IModules } from "@/types";

// Define the shape of your context
interface DataContextType {
  eligibleStudentsData: Ieligible_students[];
  modulesData: IModules[];
}

// Create a context with a default value
export const DataContext = createContext<DataContextType>({
  eligibleStudentsData: [],
  modulesData: [],
});

// Define the provider's props
interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [eligibleStudentsData, setEligibleStudentsData] = useState<Ieligible_students[]>([]);
  const [modulesData, setModulesData] = useState<IModules[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: eligible_students } = await eligibleStudents();
        const { data: module } = await modules();

        setEligibleStudentsData(eligible_students!);
        setModulesData(module!);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ eligibleStudentsData: () => {}, modulesData: () => {}}}>
      {children}
    </DataContext.Provider>
  );
};
