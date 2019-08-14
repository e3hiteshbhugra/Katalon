<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS_GetCountryDetails</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <testSuiteGuid>c7bc7a9b-f352-43c0-bcf1-e26a53abd9ff</testSuiteGuid>
   <testCaseLink>
      <guid>3c063bc7-5d9a-40bc-a833-50543f2d0a10</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CountryInfoSoapService/TC_GetCapitalByCountryIsoCode</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>3d5dd771-0406-4888-bebf-4dabfd6e9845</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CountryInfoSoapService/TC_GetCurrencyByCountryIsoCode</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>22b109d9-a476-4685-b1ef-61f77d35abf8</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/CountryInfoSoapService/TC_GetCapitalAndCurrency</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>fb723e55-19eb-4962-9fca-c9dc93e96d4b</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/CountryInfoSoapServiceData/countryInfo</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>fb723e55-19eb-4962-9fca-c9dc93e96d4b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>countryCode</value>
         <variableId>f4f949b1-a5cc-4d3c-a65f-25cd60ca4ab5</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fb723e55-19eb-4962-9fca-c9dc93e96d4b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>countryCapital</value>
         <variableId>0e60d480-f3dc-4c93-b26d-958a789669f0</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>fb723e55-19eb-4962-9fca-c9dc93e96d4b</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>countryCurrency</value>
         <variableId>0ff8c18b-c2c2-4400-af60-6702f9e4cf64</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
