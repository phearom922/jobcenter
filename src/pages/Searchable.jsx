import React, { useEffect, useState } from "react";
import HighlightCard from "../components/HighlightCard";
import FilterableTerm from "../components/FilterableTerm";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const Searchable = () => {
  const [jobs, setJobs] = useState([]);
  const [terms, setTerms] = useState([]);
  const [cards, setCards] = useState([]);

  const removeTerms = (index) => {
    switch (terms[index]) {
      case category:
        setCategory(null);
        break;
      case company:
        setCompany(null);
        break;
      case location:
        setLocation(null);
        break;
      case keyword:
        setKeyword(null);
        break;
      default:
        setType(null);
    }

    setTerms(terms.filter((term, i) => i !== index));
  };

  const [featured, setFeatured] = useState(false);
  const [toggle, setToggle] = useState(false);
  const toggleFeatured = () => {
    setToggle(!toggle);
    setFeatured(!featured);
  };

  // ====================category  ====================
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const toggleCategoryForm = () => {
    setShowCategoryForm(!showCategoryForm);
  };

  const [category, setCategory] = useState(null);
  const handleSetCategory = (value) => {
    setCategory(value);
    setTerms((prev) => [...prev, value]);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const results = [];
    jobs.forEach((job) => {
      const index = results.findIndex((el) => job.category === el.category);
      if (index == -1) {
        results.push(job.category);
      }
    });

    setCategories(results);
  }, [jobs]);

  // ====================Company  ====================
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const toggleCompanyForm = () => {
    setShowCompanyForm(!showCompanyForm);
  };

  const [company, setCompany] = useState(null);
  const handleSetCompany = (value) => {
    setCompany(value);
    setTerms((prev) => [...prev, value]);
  };
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const results = [];
    jobs.forEach((job) => {
      const index = results.findIndex(
        (el) => job.companyName === el.companyName
      );
      if (index == -1) {
        results.push(job.companyName);
      }
    });
    setCompanies(results);
  }, [jobs]);

  // ====================Location ====================
  const [showLocationForm, setShowLocationForm] = useState(false);
  const toggleLocationForm = () => {
    setShowLocationForm(!showLocationForm);
  };

  const [location, setLocation] = useState(null);
  const handleSetLocation = (value) => {
    setLocation(value);
    setTerms((prev) => [...prev, value]);
  };
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const results = [];
    jobs.forEach((job) => {
      const index = results.findIndex((el) => job.address === el?.address);
      if (index == -1) {
        results.push(job.address);
      }
    });
    setLocations(results);
  }, [jobs]);

  // ====================Keyword ====================
  const [showKeywordForm, setShowKeywordForm] = useState(false);
  const toggleKeywordForm = () => {
    setShowKeywordForm(!showKeywordForm);
  };
  const [inputKeyword, setInputKeyword] = useState(null);
  const handleSetInputKeyword = (value) => {
    setInputKeyword(value);
  };
  const [keyword, setKeyword] = useState(null);
  const handleSetKeyword = (value) => {
    setKeyword(value);
    setTerms((prev) => [...prev, value]);
  };

  // pagination=======
  const [activeIndex, setActiveIndex] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  const handlePrev = () => {
    setFrom((prev) => prev - 4);
    setTo((prev) => prev - 4);
    setActiveIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setFrom((prev) => prev + 4);
    setTo((prev) => prev + 4);
    setActiveIndex((prev) => prev + 1);
  };

  // ====================Type ====================
  const [showTypeForm, setShowTypeForm] = useState(false);
  const toggleTypeForm = (isToggle) => {
    setShowTypeForm(isToggle);
  };
  const [type, setType] = useState(null);
  const handleSetType = (value) => {
    setType(value);
    setTerms((prev) => [...prev, value]);
  };
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const results = [];
    jobs.forEach((job) => {
      const index = results.findIndex((el) => job.jobType === el.jobType);
      if (index == -1) {
        results.push({ ...job, amount: 1 });
      } else {
        results[index].amount++;
      }
    });
    setTypes(results);
  }, [jobs]);

  useEffect(() => {
    const fetchedData = async () => {
      let cards = [];
      let result = await (await fetch("http://localhost:5174/job")).json();
      if (category) {
        result = result.filter((job) => job.category === category);
      }
      if (company) {
        result = result.filter((job) => job.companyName === company);
      }
      if (location) {
        result = result.filter((job) => job.address.city === location);
      }
      if (keyword) {
        result = result.filter((job) =>
          job.tags.includes(keyword.toLowerCase())
        );
      }
      if (type) {
        result = result.filter((job) => job.jobType === type);
      }
      if (featured) {
        result = result.filter((job) => job.featured);
      }
      result.forEach((job, i) => {
        if (i >= from && i <= to) {
          cards.push(job);
        }
      });

      setCards(cards);
      setJobs(result);
    };
    fetchedData();
  }, [category, company, location, keyword, type, featured, from, to ]);

  return (
    <div className="bg-gray-50 border-t py-12 px-10 2xl:px-0">
      <div className="2xl:w-8/12 2xl:mx-auto space-y-8 ">
        <div className="border shadow rounded p-4">
          <HighlightCard />
        </div>
        <div>
          <FilterableTerm
            toggle={toggle}
            toggleFeatured={toggleFeatured}
            showCategoryForm={showCategoryForm}
            toggleCategoryForm={toggleCategoryForm}
            showCompanyForm={showCompanyForm}
            toggleCompanyForm={toggleCompanyForm}
            showLocationForm={showLocationForm}
            toggleLocationForm={toggleLocationForm}
            showKeywordForm={showKeywordForm}
            toggleKeywordForm={toggleKeywordForm}
            showTypeForm={showTypeForm}
            toggleTypeForm={toggleTypeForm}
            categories={categories}
            handleSetCategory={handleSetCategory}
            companies={companies}
            handleSetCompany={handleSetCompany}
            locations={locations}
            handleSetLocation={handleSetLocation}
            inputKeyword={inputKeyword}
            handleSetKeyword={handleSetKeyword}
            handleSetInputKeyword={handleSetInputKeyword}
            types={types}
            handleSetType={handleSetType}
            terms={terms}
            removeTerms={removeTerms}
          />
        </div>
        {jobs.length > 0 ? (
          <div>
            <JobCard jobs={cards} />
          </div>
        ) : (
          <div>
            <h1 className="text-red-600 text-4xl text-center">
              Jobs is not found!
            </h1>
          </div>
        )}
      </div>
      <div>
        <Pagination
          jobs={jobs}
          activeIndex={activeIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default Searchable;
