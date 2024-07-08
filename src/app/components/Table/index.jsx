"use client"

const Table = ({
    columns = ["company_name", "company_logo_url", "event_name", "event_country"],
    rows = [
      [
          "Amazon Web Services (AWS)",
          "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/amazon-b6f77c2b",
          "Industrial Transformation ASIA-PACIFIC 2024",
          "Singapore"
      ],
      [
          "Artefact",
          "https://media.licdn.com/dms/image/D4E0BAQG0Bv5khkyoVg/company-logo_200_200/0/1718635198653/artefact_global_logo?e=1727308800&v=beta&t=uRWoKsgoqBAjVpADs91PV2PUHFJm2J_mUbZMMrIvFxs",
          "#DMWF Asia",
          null
      ],
      [
          "Digital Realty",
          "https://media.licdn.com/dms/image/D4E0BAQESfZSQqYORrw/company-logo_200_200/0/1719257971753/digitalrealty_logo?e=1727308800&v=beta&t=0wq57N_PDvPg7D0vidpTwund5K_QRk_sSTWjH9LU1nc",
          "Submarine Networks World 2024",
          null
      ],
      [
          "Navitaire, an Amadeus company",
          "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/navitaire-an-amadeus-company-f2f77151",
          "Aviation Festival Asia 2025",
          null
      ]
    ]
  }) => {

  function convertColumnNameToTitleCase(str) {
    return str
      .split('_') // Split by underscore
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join words with a space
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900/80 pb-3">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700 rounded-lg overflow-hidden">
                    <thead>
                      <tr>
                        {
                          columns.map(column => {
                            return (
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                {convertColumnNameToTitleCase(column)}
                              </th>
                            )
                          })
                        }
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {
                        rows.map((row = [], index) => {
                          const rowItems = row;
                          return (
                            <tr key={index}>
                              {
                                rowItems.map(rowItem => {
                                  return (
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0 max-w-[200px] overflow-hidden text-ellipsis">
                                        <span title={rowItem}>{rowItem}</span>
                                    </td>
                                  )
                                })
                              }
                          </tr>
                          )
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;
