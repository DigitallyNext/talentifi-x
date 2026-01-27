import React from "react";
import { SolutionsBanner } from "../../components/solutions/SolutioinsBanner";
import { SolutionsAISpeed } from "../../components/solutions/SolutioinsAISpeed";
import { SolutionsTemporaryStaffing } from "../../components/solutions/solutionsTemporaryStaffing";
import { SolutionsPermanentPlacement } from "../../components/solutions/solutionsPermanentPlacement";
import { SolutionsContractToHire } from "../../components/solutions/solutionsContractToHire";
import { SolutionsExecutiveSearch } from "../../components/solutions/solutionsExecutiveSearch";
import { SolutionsIncludes } from "../../components/solutions/solutionsIncludes";
import { SolutionsBuiltFor } from "../../components/solutions/solutionsBuiltFor";

export default function Solutions() {
  return (
    <div className="w-full">
      <SolutionsBanner />
      <SolutionsAISpeed />
      <SolutionsTemporaryStaffing />
      <SolutionsPermanentPlacement />
      <SolutionsContractToHire />
      <SolutionsExecutiveSearch />
      <SolutionsIncludes />
      <SolutionsBuiltFor />
    </div>
  );
}
